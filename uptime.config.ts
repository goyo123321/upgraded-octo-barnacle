const pageConfig = {
  // Title for your status page
  title: "监控面板",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://blog.xo.je/?i=1', label: '博客', highlight: true },
    { link: 'https://tv.goyo123.giize.com/', label: 'CF反代爪云MoonTV', highlight: true }, 
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
      {
      id: 'MoonTV爪云',
      name: 'MoonTV爪云',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://mcgxofhwizyd.ap-northeast-1.clawcloudrun.com',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://mcgxofhwizyd.ap-northeast-1.clawcloudrun.com',
      timeout: 10000,
    },
    {
      id: 'Komari',
      name: 'Komari',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ssassxxaa002-kmi.hf.space',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://appwrite.2.1.4.b.0.d.0.0.1.0.a.2.ip6.arpa',
      timeout: 10000,
    },
    {
      id: 'Komari-agent',
      name: 'Komari-agent',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ssassxxaa002-agent.hf.space',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://ssassxxaa002-agent.hf.space',
      timeout: 10000,
    },
    {
      id: '火狐',
      name: '抱脸火狐',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ssassxxaa002-eooce-firefox.hf.space/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://ssassxxaa002-eooce-firefox.hf.space/',
      timeout: 10000,
    },
    {
      id: '抱脸MoonTV',
      name: '抱脸MoonTV',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cfnezhatt-bhfhgtt.hf.space/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://cfnezhatt-bhfhgtt.hf.space/',
      timeout: 10000,
    },
    {
      id: 'webssh',
      name: 'webssh',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ssassxxaaus-webssh.hf.space',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://ssassxxaaus-webssh.hf.space',
      timeout: 10000,
    },
    {
      id: 'firefox2',
      name: 'Firefox2',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ssassxxaa002-ff.hf.space',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://ssassxxaa002-ff.hf.space',
      timeout: 10000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
