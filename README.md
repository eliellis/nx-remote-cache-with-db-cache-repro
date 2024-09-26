# Nx Custom Remote Cache Issue Reproduction

## Reproduction Steps

1. Clone repo
2. Run `npm ci`

### DB not enabled

1. Run `npm run build:without-db`
2. Observe that the `DummyRemoteCache` prints the expected highlighted text to the terminal

### DB enabled

1. Run `npm run build:with-db`
2. `DummyRemoteCache` is not used, and therefore no highlighted text is printed to the terminal
