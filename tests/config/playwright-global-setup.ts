//import { FullConfig } from '@playwright/test'; // TODO Why is this broken?

async function globalSetup(config/*: FullConfig*/) { // TODO This should be here
    process.env.VITE_SWIMIFIED_COOKIE_SESSION_ENCRIPTION_KEY = '12345789012345789012345789012';
}

export default globalSetup;