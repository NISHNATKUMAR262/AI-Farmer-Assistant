# ALG-AI-02 — AI / ML Intelligent Document Investigator

**Team:** Tech Titans  
**Members:** Nishant Kumar, Yuckti Goyal

## Features
- PDF, DOCX, PPTX, TXT, PNG/JPG/JPEG ingestion
- OCR for scanned PDFs/images
- Page/slide-aware chunking and citations
- Sentence-Transformer embeddings + FAISS semantic retrieval
- Lightweight lexical reranking
- RAG answer generation with source grounding
- Numeric conflict detection
- Uncertainty/confidence reporting
- SQLite document + investigation history
- FastAPI + Swagger
- React/Vite frontend
- Docker support

## Architecture
Upload → Extract/OCR → Chunk → Embed → FAISS → Retrieve/Rerank → Conflict Detection → Uncertainty → RAG → Source-grounded Answer

## Windows setup
```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn app.main:app --reload
```

Frontend:
```powershell
cd frontend
npm install
npm run dev
```

Backend: http://127.0.0.1:8000  
Swagger: http://127.0.0.1:8000/docs  
Frontend: http://localhost:5173

## OCR
Install Tesseract OCR and set `TESSERACT_CMD` in `.env` on Windows.

## LLM
Set `OPENAI_API_KEY` and `LLM_MODEL` in `.env`. Without a key, retrieval-only evidence is still returned.

## Demo
1. Upload multiple documents.
2. Ask a natural-language question.
3. Show source/page references.
4. Upload documents with different numeric facts and demonstrate conflict detection.
5. Show uncertainty score and explain why unsupported claims are not invented.
