# `/v2/tokeninfo`

 * Authenticated

Provides data associated with the provided API key. Can be used to check the permissions granted to a given API key, or pull the name field for jury-rigged authentication purposes.

## Token Info

The returned tokeninfo object looks like:

```
{
    "id": "017A2B0C-A6C5-CC4D-A055-680F427CE8FD",
    "name": "public key",
    "permissions": [
        "account",
        "characters"
    ]
}
```

 * `id` is the unique id for this token. It is immutable.
 * `name` is what the user typed into the name field. It may change.
 * `permissions` is the list of permissions that are assigned to this token. It is immutable. The possible values for this enumeration are:
    * `account`, which is always set.
    * `inventories`
    * `characters`
    * `tradingpost`
    * `wallet`
    * `unlocks`
    * `pvp`
    * `builds`

## Authentication with API Keys

Please note that this is is a horrible makeshift manner to use API keys for authentication, but that's the best we can do. Open to pull requests if there's a better way to do this.

The problem with authenticating with API keys is that API keys are meant to be shared -- they're not secret values. When you want to use them as an authentication token, they *need* to be kept secret. The best approach I can think of is:

 1. Prompt the user to create a token with a specific, unique name (e.g., `MyApp-AE8FFD92`). They should be instructed to copy-paste it into the name field. This forces them to create a new token that hasn't been previously shared.
 2. Use `/v2/tokeninfo` to check that the name is correct.
 3. Use `/v2/account` to get the user's account information (e.g., the account name).
 4. Prompt the user to delete the token.
 5. Use `/v2/tokeninfo` to verify that the token has been deleted. This ensures that the token can't be used to authenticate again. The user is now authenticated (and you're left without a token, which is a bit of a mess).

This is the "best" approach when the metric is ensuring that the key entered belongs to the user making the request. From a UX standpoint... it's not very good.

It may be feasible to omit the key deletion step (e.g., by only using authentication to tie a GW2 account to an application-maintained account as a once-per-GW2-account action -- so subsequent uses of the same key can't be used to authenticate). The advantage to this change is that you don't need to request a second key from the user for API access -- you can continue using the key provided for authentication.
