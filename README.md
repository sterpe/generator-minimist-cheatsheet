# generator-minimist-cheatsheet

Adds the `minimist-cheatsheet` to a project for easy bin'ng.

### Install
```bash
# install yeoman
npm install -g yo
npm install -g git+https://github.com/sterpe/generator-minimist-cheatsheet.git
```

### Use
```bash
yo minimist-cheatsheet
```

### Note
If the target directory already has a `package.json` you should decline to overwrite the 
existing file.  You will need to manually add the "bin" property to the package.

```javascript
{
  "bin": {
    "foo": "bin/cmd.js"
  }
}
```
