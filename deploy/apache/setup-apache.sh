#!/usr/bin/env bash
set -euo pipefail

DOMAIN="${DOMAIN:-shivaytoursandtravels.com}"
SITE_NAME="shivaaytoursandtravels"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE="${SCRIPT_DIR}/shivaay.conf"
TMP_FILE="$(mktemp)"

sed "s/__DOMAIN__/${DOMAIN}/g" "${TEMPLATE}" > "${TMP_FILE}"

sudo cp "${TMP_FILE}" "/etc/apache2/sites-available/${SITE_NAME}.conf"
sudo a2enmod proxy proxy_http headers
sudo a2ensite "${SITE_NAME}.conf"

# Optional: disable the default site if it conflicts with your domain
# sudo a2dissite 000-default.conf

sudo systemctl reload apache2

echo "Apache configured for ${DOMAIN}."
echo "Make sure your Next.js app is running on http://37.230.138.188:3000 (npm run build && npm start)."

if [[ "${ENABLE_SSL:-false}" == "true" ]]; then
  if ! command -v certbot >/dev/null 2>&1; then
    echo "certbot not found; install it first (python3-certbot-apache)."
    exit 1
  fi
  if [[ -z "${CERTBOT_EMAIL:-}" ]]; then
    echo "Set CERTBOT_EMAIL to run certbot non-interactively, e.g.:"
    echo "  CERTBOT_EMAIL=angryclown27@gmail.com ENABLE_SSL=true ./setup-apache.sh"
    exit 1
  fi
  sudo certbot --apache -d "${DOMAIN}" -d "www.${DOMAIN}" --redirect --non-interactive --agree-tos -m "${CERTBOT_EMAIL}"
  echo "SSL enabled via certbot for ${DOMAIN}."
fi
