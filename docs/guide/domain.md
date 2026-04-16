# Connect a Custom Domain

Replace the Framer subdomain with your own custom domain.

## Prerequisites

- You own a domain (e.g., `myagency.com`)
- You have access to your domain registrar (GoDaddy, Namecheap, etc.)
- Your site is already published on Framer

## Step 1: Open Site Settings

In Framer, go to **Site Settings** → **Domains**

## Step 2: Add Your Domain

Click **+ Add Domain** and enter your domain name:
```
myagency.com
```

Framer will show two DNS records you need to add.

## Step 3: Add DNS Records

Go to your domain registrar and add the DNS records Framer provides:

### A Record
```
myagency.com  A  162.159.130.26
```

(IP address may vary — use what Framer shows)

### CNAME Record
```
www  CNAME  cname.framer.app
```

This redirects `www.myagency.com` to your Framer site.

:::warning
DNS propagation can take **up to 24 hours**. Changes usually appear in 5–10 minutes, but be patient if it takes longer.
:::

## Step 4: Wait for DNS Propagation

Once DNS records are added:

1. Framer checks if the domain resolves
2. Automatically provisions an SSL certificate
3. Your site is accessible at `myagency.com`

## Step 5: Verify

Once propagated, visit your domain:
```
https://myagency.com
```

Your SYNTHEX site is now live on your custom domain.

## SSL Certificate

Framer **automatically** provisions a free SSL certificate via Let's Encrypt.

- Your site is **always HTTPS**
- Certificate auto-renews
- No manual action needed

## Troubleshooting

**Domain not resolving?**
- Wait 24 hours for full DNS propagation
- Check you added the records to the right registrar
- Verify the DNS records match exactly what Framer provided

**SSL certificate error?**
- Wait another 10 minutes for Framer to generate the certificate
- Clear your browser cache and try again

**www subdomain not working?**
- Make sure you added the CNAME record for `www`
- Framer usually redirects both `myagency.com` and `www.myagency.com`

## Email & Subdomain Forwarding

**Note:** Framer only handles your website. For email:

- Set up email separately (e.g., Google Workspace, Microsoft 365)
- Email requires additional MX records at your registrar

## Next Steps

→ [SEO Settings](/synthex/guide/seo)
