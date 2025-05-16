function removerLinks() {
    const todos = document.getElementById("todosLinks").value.trim().split("\n").map(link => link.trim());
    const remover = document.getElementById("linksRemover").value.trim().split("\n").map(link => link.trim());

    const filtrado = todos.filter(link => !remover.includes(link));

    document.getElementById("resultado").value = filtrado.join("\n");
  }