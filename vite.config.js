import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Local development middleware for Netlify Forms.
 * Netlify Forms operates natively on deployed Netlify edge infrastructure.
 * In local Vite dev and preview servers, this middleware accepts POST requests
 * matching form-name="pilot-interest" and returns HTTP 200, allowing full browser
 * testing of form submission, loading states, validation, and success handling.
 */
function netlifyFormsDevPlugin() {
  const handler = (req, res, next) => {
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        const params = new URLSearchParams(body);
        if (params.get("form-name") === "pilot-interest") {
          const name = (params.get("name") || "").trim();
          const email = (params.get("email") || "").trim();
          const botField = params.get("bot-field");

          if (botField) {
            // Honeypot spam drop in local mock
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.setHeader("X-Local-Mock", "true");
            return res.end(
              JSON.stringify({
                mock: true,
                spam: true,
                message: "Local test successful — no application was sent or stored.",
              })
            );
          }

          if (!name || !email) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "text/plain");
            res.setHeader("X-Local-Mock", "true");
            return res.end("Bad Request: Missing required name or email");
          }

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.setHeader("X-Local-Mock", "true");
          return res.end(
            JSON.stringify({
              mock: true,
              message: "Local test successful — no application was sent or stored.",
            })
          );
        }
        next();
      });
    } else {
      next();
    }
  };

  return {
    name: "netlify-forms-dev",
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

export default defineConfig({
  plugins: [react(), netlifyFormsDevPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        forFreelanceAgencies: resolve(__dirname, "for-freelance-agencies/index.html"),
        buildingInPublic: resolve(__dirname, "building-in-public/index.html"),
        about: resolve(__dirname, "about/index.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
});
