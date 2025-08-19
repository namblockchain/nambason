import React, { useEffect, useRef, useState } from "react";

const Tool = () => {
  const [text, setText] = useState("");
  const [dataSliceFile, setDataSliceFile] = useState([]);
  const textRef = useRef(null);

  const parseProductsFromTextInput = (text) => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const products = [];

    let current = {};
    for (let line of lines) {
      if (line.startsWith("ma\t")) {
        if (Object.keys(current).length > 0) {
          products.push({ ...current });
          current = {};
        }
      }

      const [key, ...rest] = line.split("\t");
      const value = rest.join(" ").trim();

      if (key === "allPhoto" || key === "categories") {
        try {
          current[key] = JSON.parse(value.replace(/'/g, '"'));
        } catch {
          current[key] = [];
        }
      } else {
        current[key] = value;
      }
    }

    if (Object.keys(current).length > 0) {
      products.push(current);
    }

    return products;
  };

  const formatProducts = (products) => {
    return `products: [\n${products
      .map((item) => {
        const entries = Object.entries(item)
          .map(([key, value]) => {
            const val = Array.isArray(value)
              ? `[${value.map((v) => `"${v}"`).join(",")}]`
              : `"${value}"`;
            return `  ${key}: ${val}`;
          })
          .join(",\n");
        return `  {\n${entries}\n  }`;
      })
      .join(",\n")}\n]`;
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.textContent);
      alert("Đã copy thành công!");
    }
  };

  useEffect(() => {
    const data = parseProductsFromTextInput(text);
    setDataSliceFile(data);
  }, [text]);

  const formatted = formatProducts(dataSliceFile);

  return (
    <div id="tool" style={{ padding: "20px" }}>
      <form>
        <textarea
          value={text}
          onChange={handleChangeText}
          style={{ width: "100%", height: "150px", marginBottom: "16px" }}
        ></textarea>
      </form>
      <div className="content">
        <button
          onClick={handleCopy}
          style={{
            marginBottom: "10px",
            padding: "6px 12px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Copy
        </button>
        <pre
          ref={textRef}
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            background: "#f0f0f0",
            padding: "16px",
            borderRadius: "6px",
          }}
        >
          {formatted}
        </pre>
      </div>
    </div>
  );
};

export default Tool;
