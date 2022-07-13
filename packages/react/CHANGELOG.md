# Change Log

## 3.0.0-beta.21

### Patch Changes

- 609d79ba: Generic parameters of wrapped components had been missed in some cases.
- 17c83e34: Aliases for environments without the support of `exports` in package.json.
- Updated dependencies [f726eb3b]
- Updated dependencies [17c83e34]
  - @linaria/core@3.0.0-beta.21

## 3.0.0-beta.20

### Patch Changes

- 8be5650d: The repo has been migrated to PNPM and Turborepo
- beta.19 broke prop interploation in some enviroments. Fixed. (fix #981)
- Updated dependencies [8be5650d]
  - @linaria/core@3.0.0-beta.20

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0-beta.19](https://github.com/callstack/linaria/compare/v3.0.0-beta.18...v3.0.0-beta.19) (2022-06-03)

### Bug Fixes

- **react:** support UpperCamelCase custom elements [#968](https://github.com/callstack/linaria/issues/968) ([#970](https://github.com/callstack/linaria/issues/970)) ([59800db](https://github.com/callstack/linaria/commit/59800dba540e09c0c43b1f0ec1d4b2c46d8a4672))

### Features

- **atomic:** add support for atomic using styled API ([#966](https://github.com/callstack/linaria/issues/966)) ([f59860b](https://github.com/callstack/linaria/commit/f59860b09c5f91b0423dbf188e5f8aaaef38a6b5))
- **babel:** api for custom tags ([#976](https://github.com/callstack/linaria/issues/976)) ([3285ccc](https://github.com/callstack/linaria/commit/3285ccc1d00449b78b3fc74087528cd38cbdd116))
- **babel:** new way for detecting tag imports ([#974](https://github.com/callstack/linaria/issues/974)) ([3305cfb](https://github.com/callstack/linaria/commit/3305cfb0c0f65abdacceeb7e6bad118c59f7d551))

# [3.0.0-beta.18](https://github.com/callstack/linaria/compare/v3.0.0-beta.17...v3.0.0-beta.18) (2022-04-01)

**Note:** Version bump only for package @linaria/react

# [3.0.0-beta.17](https://github.com/callstack/linaria/compare/v3.0.0-beta.16...v3.0.0-beta.17) (2021-12-27)

### Bug Fixes

- **react:** refactored types for styled function (fixes [#872](https://github.com/callstack/linaria/issues/872)) ([#887](https://github.com/callstack/linaria/issues/887)) ([7b8b129](https://github.com/callstack/linaria/commit/7b8b12937f9a0d1730d908e7cebad1684ccb03c3))

# [3.0.0-beta.15](https://github.com/callstack/linaria/compare/v3.0.0-beta.14...v3.0.0-beta.15) (2021-11-29)

### Bug Fixes

- **react:** fixed types for supporting class components (fixes [#730](https://github.com/callstack/linaria/issues/730)) ([#877](https://github.com/callstack/linaria/issues/877)) ([e637ecb](https://github.com/callstack/linaria/commit/e637ecb8946a8119cfbd039bfb65d42206e09c4e))

# [3.0.0-beta.14](https://github.com/callstack/linaria/compare/v3.0.0-beta.13...v3.0.0-beta.14) (2021-11-05)

### Bug Fixes

- **react:** refactor/rest op ([#860](https://github.com/callstack/linaria/issues/860)) ([da94704](https://github.com/callstack/linaria/commit/da94704df8ca74d94fe57682e2557274cf2d4cb0))
- **react:** unions in prop types are not resolved ([#844](https://github.com/callstack/linaria/issues/844)) ([62009e9](https://github.com/callstack/linaria/commit/62009e9184638fd8761f187c99e7ea434f364bee))

# [3.0.0-beta.13](https://github.com/callstack/linaria/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2021-09-13)

### Bug Fixes

- **react:** fixes for `--exactOptionalPropertyTypes` TS flag ([#827](https://github.com/callstack/linaria/issues/827)) ([eed92b1](https://github.com/callstack/linaria/commit/eed92b19e3b779b656fb780307bbab8a08d14ba2))

# [3.0.0-beta.11](https://github.com/callstack/linaria/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2021-08-08)

### Bug Fixes

- **styled:** remove unnecessary core-js polyfills (fixes [#799](https://github.com/callstack/linaria/issues/799)) ([#814](https://github.com/callstack/linaria/issues/814)) ([6c3070a](https://github.com/callstack/linaria/commit/6c3070a47715022eb761567b8795f6918784ae4c))

# [3.0.0-beta.7](https://github.com/callstack/linaria/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2021-06-24)

**Note:** Version bump only for package @linaria/react

# [3.0.0-beta.4](https://github.com/callstack/linaria/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2021-05-07)

**Note:** Version bump only for package @linaria/react

# [3.0.0-beta.3](https://github.com/callstack/linaria/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-04-20)

### Bug Fixes

- **core,react:** make IE 11 compatible (fixes [#746](https://github.com/callstack/linaria/issues/746)) ([#750](https://github.com/callstack/linaria/issues/750)) ([922df95](https://github.com/callstack/linaria/commit/922df9576a430cdfe9b27aed5dc45c4f75917607))

# [3.0.0-beta.2](https://github.com/callstack/linaria/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-04-11)

**Note:** Version bump only for package @linaria/react