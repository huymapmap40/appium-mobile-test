const path = require('path');
const wd = require('webdriverio');

describe("Test jasmine", () => {
    it("First test case", async () => {

        let appiumCapabilities = {
                'platformName': 'Android',
                'platformVersion': '10',
                'deviceName': 'Redmi Note 7 Pro',
                'automationName': 'UiAutomator2',
                'app': path.join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk')
        }

        let opts = {
            path: '/wd/hub',
            port: 4723,
            capabilities: appiumCapabilities
        }
        
        let driverSession = await wd.remote(opts);
        console.log('==========>', driverSession);

        expect(1).toBe(1);
    })
});