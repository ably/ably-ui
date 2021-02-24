module ApplicationHelper
  def session_data
    base = {
      accountName: "Ably UI",
      preferredEmail: "ably-ui@example.com",
      mySettings: { text: 'My settings', href: '/users/edt' },
      signedIn: true,
      emulatingUser: false,
      pageVisitCount: 9,
      cookiesAcceptedByUser: true,
      account: nil,
      myAccessTokens: { text: 'My Access Tokens', href: '/users/9478/access_tokens' }
    }

    base[:hubspot] = {
      identifyKey: 'hs_session_identified'
    }

    base[:user] = {
      email: "john.doe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      accountNameForCrm: "Free account : ably_free (8885)",
      id: 9478,
      adminUrl: "https://ably.com/go/users/9478",
    }

    base[:account] = {
      links: {
        dashboard: { text: 'Your dashboard', href: '/accounts/8885' },
        package: { text: 'Your package & limits', href: "/accounts/8885/package_limits" },
        billing: { text: 'Billing and upgrades', href: "/accounts/8885/package" },
        settings: { text: 'Account settings', href: "/accounts/8885/edit" },
        manage: { text: 'Manage Users', href: "/accounts/8885/account_users" },
        support: { text: 'Get support', href: "/support" },
      }
    }

    base[:logOut] = { href: "/users/sign_out", text: 'Log out', token: "token" }

    base
  end
end
