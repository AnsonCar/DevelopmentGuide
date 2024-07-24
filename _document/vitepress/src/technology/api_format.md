# API規範

在上一章節中，提到會使用RESTful API風格，但這還不夠細節。   
為了擁有更高通用性的 API，我們會遵守 OpenAPI 規範。

OpenAPI（前身為Swagger）是一個用於描述和設計 RESTful API 的開放式規範。  
使用 JSON 或 YAML 格式的文件來定義 API 的結構、端點、參數、請求和響應等信息。

Swagger 同樣是一種用於描述和設計 RESTful API 的規範工具。  
最重要是，Swagger可以自動生成互動式的 API 文件和客戶端程式碼。   

Swagger UI 是 Swagger 工具集的一個組件，它提供了一個互動式的、可視化的界面，用於渲染和展示 Swagger 描述文件生成的 API 文檔。

![Swagger](/public/api_format.png)

> 一個openapi.json的樣子。
![openapi.json](/public/api_format2.png)

有了他，前後端交流更暢通。在巿面上，有一些工具可以利用這個規範生成前端的接口，例如OpenAPI Typescript Codegen，減低前端寫請求文件的煩惱。
但好像有點難用，所以我遲點會寫一個。