// use-cases: Declares health-check business logic; why: response creation is separated from HTTP concerns; without: controller owns domain data; rules: use a small service class for a feature layer.
export class HealthService {

// use-cases: Defines the health query; why: controller needs a stable result; without: no health payload exists; rules: use a synchronous method because no I/O occurs.
    getHealth() {

// use-cases: Starts the health response object; why: callers need structured state; without: no payload can be returned; rules: return an object rather than a formatted string for JSON serialization.
        return {

// use-cases: Sets the operational status; why: monitoring checks a clear signal; without: consumers cannot determine health; rules: use a concise, conventional string status.
            status: "healthy",

// use-cases: Identifies the responding service; why: monitoring can distinguish components; without: response provenance is missing; rules: expose a simple stable service identifier.
            service: "api"

// use-cases: Closes the health payload; why: it completes the object; without: syntax is invalid; rules: include only public health fields.
        };

// use-cases: Closes the query method; why: it bounds payload creation; without: syntax is invalid; rules: keep status computation in the service.
    }

// use-cases: Closes the service class; why: it groups health operations; without: syntax is invalid; rules: make the service reusable by controllers or tests.
}
