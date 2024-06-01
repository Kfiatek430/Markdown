import customtkinter as ctk
from tkinter import filedialog
import pypandoc
import os

try:
    pandoc_version = pypandoc.get_pandoc_version()
except Exception as e:
    pypandoc.download_pandoc()

def convert_file():
    input_file_path = entry_input_path.get()
    output_file_path = entry_output_path.get()

    try:
        label_status.set("Conversion started.")
        label_status.set("Converting DOCX to Markdown...")
        pypandoc.convert_file(input_file_path, 'markdown_strict', outputfile=output_file_path)
        label_status.set("Conversion completed successfully.")
    except Exception as e:
        label_status.set(f"Error: {e}")

def browse_input_path():
    filetypes = [("Word Documents", "*.docx")]
    input_file_path = filedialog.askopenfilename(filetypes=filetypes)
    entry_input_path.delete(0, ctk.END)
    entry_input_path.insert(0, input_file_path)

def browse_output_path():
    output_file_path = filedialog.asksaveasfilename(defaultextension=".md", filetypes=[("Markdown Files", "*.md")])
    entry_output_path.delete(0, ctk.END)
    entry_output_path.insert(0, output_file_path)

root = ctk.CTk()
root.title("File Converter")

frame = ctk.CTkFrame(root)
frame.pack(padx=10, pady=10)

label_input_path = ctk.CTkLabel(frame, text="Input File:")
label_input_path.grid(row=0, column=0, sticky="w", padx=5, pady=5)

entry_input_path = ctk.CTkEntry(frame, width=500)
entry_input_path.grid(row=0, column=1, padx=5, pady=5)

button_browse_input = ctk.CTkButton(frame, text="Browse", command=browse_input_path)
button_browse_input.grid(row=0, column=2, padx=5, pady=5)

label_output_path = ctk.CTkLabel(frame, text="Output File:")
label_output_path.grid(row=1, column=0, sticky="w", padx=5, pady=5)

entry_output_path = ctk.CTkEntry(frame, width=500)
entry_output_path.grid(row=1, column=1, padx=5, pady=5)

button_browse_output = ctk.CTkButton(frame, text="Browse", command=browse_output_path)
button_browse_output.grid(row=1, column=2, padx=5, pady=5)

button_convert = ctk.CTkButton(frame, text="Convert", command=convert_file)
button_convert.grid(row=2, columnspan=3, padx=5, pady=10)

label_status = ctk.StringVar()
status_label = ctk.CTkLabel(frame, textvariable=label_status)
status_label.grid(row=3, columnspan=3, padx=5, pady=5)

root.mainloop()
