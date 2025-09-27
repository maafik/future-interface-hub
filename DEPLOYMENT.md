# Инструкции по развертыванию

## 🚨 Решение проблемы с белым экраном

Если вы видите белый экран с сообщением "TLS certificate is being provisioned", это означает, что GitHub Pages еще не завершил настройку SSL сертификата для вашего домена.

### Что делать:

1. **Подождите 15-30 минут** - GitHub Pages автоматически настроит SSL сертификат
2. **Проверьте статус в настройках репозитория:**
   - Перейдите в Settings → Pages
   - Убедитесь, что домен `quirkynest.ru` указан в разделе "Custom domain"
   - Дождитесь зеленой галочки "Enforce HTTPS"

3. **Альтернативное решение - временно используйте GitHub Pages URL:**
   - Ваш сайт будет доступен по адресу: `https://your-username.github.io/future-interface-hub`
   - После настройки SSL сертификата переключитесь обратно на `quirkynest.ru`

## 🔧 Настройка DNS

Для правильной работы домена `quirkynest.ru` настройте DNS записи:

### Вариант 1: CNAME запись (рекомендуется)
```
Type: CNAME
Name: quirkynest.ru
Value: your-username.github.io
```

### Вариант 2: A записи
```
Type: A
Name: quirkynest.ru
Value: 185.199.108.153

Type: A  
Name: quirkynest.ru
Value: 185.199.109.153

Type: A
Name: quirkynest.ru
Value: 185.199.110.153

Type: A
Name: quirkynest.ru
Value: 185.199.111.153
```

## 📋 Проверка развертывания

1. **Проверьте GitHub Actions:**
   - Перейдите в раздел "Actions" вашего репозитория
   - Убедитесь, что последний workflow выполнился успешно

2. **Проверьте GitHub Pages:**
   - Settings → Pages
   - Убедитесь, что источник установлен как "GitHub Actions"
   - Проверьте, что домен указан правильно

3. **Проверьте файлы:**
   - Убедитесь, что файл `CNAME` содержит `quirkynest.ru`
   - Убедитесь, что файл `.nojekyll` существует

## 🚀 Принудительное обновление

Если проблема не решается автоматически:

1. **Пересоздайте развертывание:**
   ```bash
   git commit --allow-empty -m "Force redeploy"
   git push origin main
   ```

2. **Проверьте логи GitHub Actions** на наличие ошибок

3. **Временно отключите и включите GitHub Pages** в настройках репозитория
