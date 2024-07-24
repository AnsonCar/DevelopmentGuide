# API風格

## RESTful API
在一般開發中，使用 RESTful API設計風格來實作API。 
RESTful API是一種基於HTTP協定的設計風格，利用統一的介面和狀態碼提供輕量級、可擴充、無狀態的資源操作。

RESTful API的設計風格包括以下特點：
1. 統一方法： 
RESTful API 採用一套統一的 HTTP 方法（GET、POST、PUT、DELETE 等）和 URL 來進行資源操作。這使得不同的客戶端（例如Web應用、行動應用）可以使用相同的接口進行操作，降低學習成本並提高開發效率。

2. 輕量級且可擴充性：  
RESTful API 使用輕量級資料格式（例如 JSON 或 XML）進行資源傳輸，導致資料負載較小且易於解析。此外，由於 RESTful API 結構簡單明了，因此可以直接擴充新的資源類型或操作。

3. 無狀態： 
RESTful API 是無狀態的，這表示每個請求都是獨立的，不依賴先前的請求狀態。這使得 API 服務的可擴展性和部署更加容易，而無需管理每個請求的狀態。

![api_style](/public/api_style.png)

## OpenAI Chat Completions API
在LLM/RAG開發中，我們採用了OpenAI Chat Completions API風格來實現API接口。 
透過將所有LLM視為遵循這種風格的服務，我們可以將LLM部署為獨立伺服器，從而能夠與其他應用程式整合並在不同場景中使用。

