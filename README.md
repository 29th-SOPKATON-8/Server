# ๐ ์์ปคํค 8์กฐ Server repo ๐

# Service Name, description / ์๋น์ค ์ด๋ฆ๊ณผ ์๊ฐ

๐ฅProject Title: ์ ๋จ์น ํ ์คํธ  
๐description: ์ ๋จ์น ํ ์คํธ ๊ทธ๋ฆฌ์ ํ์ง๋ง๊ณ , ๊น๋ํ๊ฒ ์์ด๋จน์ !

## Development Part / ๊ฐ์ ๊ฐ๋ฐ ๋ด๋น ๋ถ๋ถ

์ด ๊ณณ์์ ๊ฐ์ ๊ฐ๋ฐ ๋ด๋น ๋ถ๋ถ ์ ๋ฆฌ์๋๋ค.

- ์ด์ ์ค
  - api/routes/lover/trashPOST
  - api/routes/post/postSuggestPOST
- ์ต์ง์
  - api/routes/suggest/suggestIdGET
  - api/routes/post/postIdGET

## Code Convention / ์ฝ๋ ์ปจ๋ฒค์

- Feat: ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
- Fix: ๋ฒ๊ทธ๋ฅผ ๊ณ ์น ๊ฒฝ์ฐ
- Style: ์ฝ๋ ํฌ๋งท ๋ณ๊ฒฝ
- Refactor: ์ฝ๋ ๋ฆฌํฉํ ๋ง
- Merge: ๋ธ๋์น ๋จธ์ง
- Docs: ๋ฌธ์ ์์ฑ
- Rename: ํ์ผ, ํด๋์ค, ๋ฉ์๋๋ช, ํด๋๋ช ์์ 
- Chore: ์ค์  ํ์ผ ๋ฑ

## branch strategy / ๋ธ๋์น ์ ๋ต

- main
- feat/feature_name
- ํด๋น ๊ธฐ๋ฅ ์์ ํ main์ merge

## folding project / ํ๋ก์ ํธ ํด๋๋ง

```
Cocktail_server
|
|- .github
|
|- functions
      |
      |
      |- api
          |- routes
              |- lover
              |- post
              |- suggest
      |- config
      |- constants
      |- lib
      |- db
```

## package.json / package.json ์บก์ณ

![package-json](https://user-images.githubusercontent.com/81547780/142740656-9ed9d7ea-5381-43c6-9da9-2d835e8a0644.PNG)

## ERD / ERD ์บก์ณ

![ERD](https://user-images.githubusercontent.com/81547780/142740678-21204a1a-33eb-4a2b-bc0a-8af41cbc73b3.PNG)

## API Specification / API ๋ช์ธ์(Route List)

### Datagrip Table ๋ธ์์ ์์ต๋๋ค.
https://www.notion.so/server-6c1dd2e841804d20be5c8f8b31235ff4

## Base URI / Base URI ๋งํฌ

https://asia-northeast3-wesopt29-328c5.cloudfunctions.net/api
