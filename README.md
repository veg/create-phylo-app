## Directory structure

```
phylo-tools
├── create-phylo-app
└── phylotree.js
```

## [Optional, but recommended for in-house developers] Set up phylotree in develop mode
```
git clone --branch 1.0.0-alpha git@github.com:veg/phylotree.js.git
cd phylotree.js
yarn
yarn link
yarn link phylotree
yarn dev
```

## Return to create-phylo-app and run example

```
cd ../create-phylo-app/
yarn
./example.js -n ./data/Flu_PB2.nwk.txt
```

