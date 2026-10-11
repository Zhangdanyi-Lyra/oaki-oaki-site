# oaki oaki!

Interactive portfolio website for the Oaki original IP, short film, exhibition concept, and six guardian characters.

## Live site

https://zhangdanyi-lyra.github.io/oaki-oaki-site/

## Source package

The complete website is stored as split ZIP parts because the media-rich project exceeds GitHub's browser upload limit.

To restore the complete folder:

```bash
cat oaki-oaki-site.zip.part-* > oaki-oaki-site.zip
unzip oaki-oaki-site.zip
```

Verify the archive parts with `SHA256SUMS.txt`.

## Run locally

After restoring the archive:

```bash
python3 -m http.server 8806
```

Then open http://127.0.0.1:8806/
