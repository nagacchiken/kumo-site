# kumo-site

## 開発環境のセットアップ

コミット時に [gitleaks](https://github.com/gitleaks/gitleaks) で秘密情報の混入をチェックするため、[pre-commit](https://pre-commit.com/) を使います。

```bash
# どれか1つ（prek でも可）
uv tool install pre-commit
# brew install pre-commit

pre-commit install
```

gitleaks のバージョンは `.pre-commit-config.yaml` で固定しています。プッシュや PR のときは、GitHub Actions でも同じチェックが走ります。
