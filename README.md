# Nameless Link

Nameless Link. A dead simple, open source link shortener. No tracking, no logging, just a link.

## Website

You do not need to self host this. You can access it on [nlnk.link](https://nlnk.link/)

## Self hosting

You can run it in a Docker container:

Clone the repo:

```bash
git clone https://github.com/Nameless-Productions/nlnk.git
```

In the repo add these to the .env file:

```
# The port for the app, defaults to 3000
APP_PORT=8080

# The user for the database
DB_USER=nlnk

# Password for the database
DB_PASSWORD=changeme

# Report email, optional
REPORT_EMAIL=report@nlnk.link
```

After that you can run by:

```bash
docker compose up -d
```

And it should be live on the port you chose
