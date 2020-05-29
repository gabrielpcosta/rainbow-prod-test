//declare var rainbowSDK: any;
declare var angular: any;
declare var $: any;

/**
 * SDK
 * TypeScript Singleton
 * Centralize access to rainbowSDK global variable (avoid dispatching rainbowSDK anywhere in the application)
 */
import rainbowSDK from 'rainbow-web-sdk';

class SDK {

    initialize() {

        console.log('[DEMO] :: Starter-Kit of the Rainbow SDK for Web with React started!');
        // SANDBOX
        // const applicationID = 'e686c7d0859711eaabed717bcb514caf';
        // const applicationSecret = '85WXb9U0cOU5Ze0xdPychVBQkh8JYJM0QpiPetaZKzsH3PrjRN8MDZqPgxK0mDir';

        // OFICIAL
        const applicationID = '7b05d350856211eab7ff8fdfc33cf25c';
        const applicationSecret = 'JJSv8MpFoO4aHSkDDYh68CBupCIwF5b7bP89zo2uIgmC9XR1sNCWfjw1yjIHOUgZ';

        /* Bootstrap the SDK */
        // angular.bootstrap(document, ['sdk']).get('rainbowSDK');

        /* Callback for handling the event 'RAINBOW_ONREADY' */
        const onReady = function onReady() {
            console.log('[DEMO] :: On SDK Ready !');
        };

        /* Callback for handling the event 'RAINBOW_ONCONNECTIONSTATECHANGED' */
        const onLoaded = function onLoaded() {
            console.log('[DEMO] :: On SDK Loaded !');

            rainbowSDK.initialize(applicationID, applicationSecret).then(function() {
                console.log('[DEMO] :: Rainbow SDK is initialized!');
            }).catch(function() {
                console.log('[DEMO] :: Something went wrong with the SDK...');
            });
        };

        /* Listen to the SDK event RAINBOW_ONREADY */
        $(document).on(rainbowSDK.RAINBOW_ONREADY, onReady);

        /* Listen to the SDK event RAINBOW_ONLOADED */
        $(document).on(rainbowSDK.RAINBOW_ONLOADED, onLoaded);

        rainbowSDK.load();
    }

    get version () {
        return rainbowSDK.version;
    }

    get rainbowSdk() {
        return rainbowSDK;
    }

    get angular() {
        return angular;
    }
};

const sdk = new SDK();

export { sdk } ;
                                        
