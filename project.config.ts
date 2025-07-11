const ProjectPrefix = {
	APP: "ama",
	CHANGE_TYPES: [
		"build",
		"chore",
		"ci",
		"docs",
		"feat",
		"fix",
		"perf",
		"refactor",
		"revert",
		"style",
		"test",
	],
	ENVIRONMENT: "main",
	ISSUE_PREFIXES: ["ama"],
	SCOPES: {
		APPS: ["frontend", "backend"],
		PACKAGES: ["shared"],
	},
} as const;

export { ProjectPrefix };
