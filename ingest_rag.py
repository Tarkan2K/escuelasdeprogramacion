import os
import json
import re

REFERENCES_DIR = '/home/c3po/Escritorio/Antigravity/cppmastery/references'
OUTPUT_FILE = '/home/c3po/Escritorio/Antigravity/cppmastery/cpp-mastery-web/src/data/rag_knowledge.json'

def parse_markdown(file_path, source_name):
    chunks = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return []

    # Split by headers (H1, H2, H3)
    # Regex looks for lines starting with #, ##, ###
    # We want to capture the header text and the content following it
    
    # Simple strategy: Split by lines, detect headers
    lines = content.split('\n')
    current_chunk = {"source": source_name, "title": "Introduction", "content": ""}
    
    for line in lines:
        header_match = re.match(r'^(#{1,3})\s+(.*)', line)
        if header_match:
            # Save previous chunk if it has content
            if current_chunk["content"].strip():
                chunks.append(current_chunk)
            
            # Start new chunk
            current_chunk = {
                "source": source_name,
                "title": header_match.group(2).strip(),
                "content": line + "\n"
            }
        else:
            current_chunk["content"] += line + "\n"
            
    # Append last chunk
    if current_chunk["content"].strip():
        chunks.append(current_chunk)
        
    return chunks

def main():
    all_chunks = []
    
    # 1. C++ Core Guidelines
    core_guidelines_path = os.path.join(REFERENCES_DIR, 'CppCoreGuidelines', 'CppCoreGuidelines.md')
    if os.path.exists(core_guidelines_path):
        print(f"Processing {core_guidelines_path}...")
        chunks = parse_markdown(core_guidelines_path, "C++ Core Guidelines")
        all_chunks.extend(chunks)
    else:
        print("Warning: CppCoreGuidelines.md not found")

    # 2. Modern C++ Tutorial (English)
    tutorial_dir = os.path.join(REFERENCES_DIR, 'modern-cpp-tutorial', 'book', 'en-us')
    if os.path.exists(tutorial_dir):
        for filename in os.listdir(tutorial_dir):
            if filename.endswith('.md') and filename != 'toc.md':
                path = os.path.join(tutorial_dir, filename)
                print(f"Processing {path}...")
                chunks = parse_markdown(path, f"Modern C++ Tutorial - {filename}")
                all_chunks.extend(chunks)

    # 3. Google Style Guide (cppguide.md) - checking common name
    # Based on previous `ls`, we need to find where it is. 
    # I'll assume it might be in styleguide/cppguide.md or similar. 
    # If not found, we skip.
    styleguide_path = os.path.join(REFERENCES_DIR, 'styleguide', 'cppguide.md') 
    # (I will check the file list output from the previous tool to be sure, but for now I'll add a check)
    if os.path.exists(styleguide_path):
         print(f"Processing {styleguide_path}...")
         chunks = parse_markdown(styleguide_path, "Google C++ Style Guide")
         all_chunks.extend(chunks)
    
    print(f"Total chunks generated: {len(all_chunks)}")
    
    # Write to JSON
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_chunks, f, indent=2, ensure_ascii=False)
    
    print(f"Knowledge base saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
