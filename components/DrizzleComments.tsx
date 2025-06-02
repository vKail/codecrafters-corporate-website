"use client";

import { useEffect, useState } from "react";

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

export default function DrizzleComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("drizzle-comments");
    if (stored) setComments(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("drizzle-comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleString("es-ES", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };
    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  const handleDelete = (id: string) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <section className="w-full mt-10 mb-8">
      <h2 className="text-2xl font-bold text-brunswick-green mb-4">
        Comentarios
      </h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-timberwolf/50 rounded-md"
          maxLength={32}
          required
        />
        <textarea
          placeholder="Escribe tu comentario..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-timberwolf/50 rounded-md"
          rows={3}
          maxLength={300}
          required
        />
        <button
          type="submit"
          className="bg-brunswick-green text-white px-4 py-2 rounded-md hover:bg-brunswick-green/90 transition-colors"
        >
          Añadir comentario
        </button>
      </form>
      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-muted-foreground">
            Sé el primero en comentar este blog.
          </p>
        )}
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-timberwolf/20 p-4 rounded-lg relative"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-brunswick-green">
                {comment.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {comment.date}
              </span>
            </div>
            <p className="text-muted-foreground mb-2">{comment.text}</p>
            <button
              onClick={() => handleDelete(comment.id)}
              className="absolute top-2 right-2 text-xs text-red-500 hover:underline"
              title="Eliminar comentario"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
