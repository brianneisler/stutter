mkdir -p dist
cp README.md dist/README.md
babel src -d dist --source-maps --copy-files
