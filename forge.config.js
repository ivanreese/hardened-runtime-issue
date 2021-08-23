require("dotenv").config()

module.exports = {
  packagerConfig: {
    ignore: ".env",
    osxSign: {
      identity: process.env.OSX_SIGN_IDENTITY,
      entitlements: "entitlements.plist",
      entitlementsInherit: "entitlements.plist",
      "gatekeeper-assess": false,
      hardenedRuntime: true // works when false, breaks when true
    },
    overwrite: true
  }
}
