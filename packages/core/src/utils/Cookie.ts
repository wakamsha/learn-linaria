type Cookie = {
  cname: string;
  cvalue: string;
  domain?: string;
  expireAt?: Date;
};

export function setCookie({ cname, cvalue, expireAt, domain = '.wakamsha.net' }: Cookie) {
  const segments: Record<string, string> = {};
  segments[cname] = cvalue;
  segments.path = '/';

  if (domain) {
    segments.domain =
      window.location.hostname === 'localhost' || window.location.hostname.includes('192.168.')
        ? window.location.hostname
        : domain;
  }

  if (window.location.protocol === 'https:') {
    segments.secure = '';
  }

  if (expireAt) {
    segments.expires = expireAt.toUTCString();
  }

  document.cookie = Object.keys(segments)
    .map((key) => (segments[key] === '' ? `${key}=` : `${key}=${segments[key]}`))
    .join('; ');
}

export function getCookie(cname: string) {
  const sensor = `${cname}=`;
  const segments = document.cookie.split(';');

  for (let pair of segments) {
    while (pair.startsWith(' ')) {
      pair = pair.slice(1);
    }
    if (pair.startsWith(sensor)) {
      return pair.slice(sensor.length);
    }
  }

  return '';
}

export function destroyCookie(cname: string) {
  setCookie({ cname, cvalue: '', expireAt: new Date(0) });
}
