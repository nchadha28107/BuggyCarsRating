module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "not @ignore",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/features/"
        ],
        publishQuiet: true,
        dryRun: false,
        require: [
            "src/hooks/hooks.ts",
            "src/steps/*.steps.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json"
        ],
        parallel: 1
    }
}