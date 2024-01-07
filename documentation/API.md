# Nest and NX

Important links

- https://nx.dev/nx-api/nest

## Using the cli.

- Controller

```bash
npx nx g @nx/nest:controller user --directory apps/api/src --nameAndDirectoryFormat as-provided
```

- Generate a new resource

```bash
npx nx generate @nestjs/schematics:resource --name=user --sourceRoot=apps/api/src --no-interactive
```
