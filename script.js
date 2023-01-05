function adicionarFilme() {
    listarFilmesNaTela();
    var campoFilmeFavorito = document.getElementById("filme").value;
    if (campoFilmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço de Filme Inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
  