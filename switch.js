let tipoUsuario; //cliente, estoque, vendedor, gerente, diretor.

tipoUsuario = "estoque";

switch (tipoUsuario) {
  case "cliente":
    console.log(
      "HOME| Carrinho de compras | Perfil Usuário | Falar com Atendente"
    );
    break;
  case "estoque":
    console.log("HOME| Estoque | Pedidos Pendentes | Rota de entregas");
    break;
  case "vendedor":
    console.log(
      "HOME|Estoque | Vendas | Atendimento de Clientes | Enviar Propostas"
    );
    break;
  case "gerente":
    console.log(
      "HOME|Pedidos Pendentes | Cadastro de Funcionarios | Cadastrar Promoção"
    );
    break;
  case "diretor":
    console.log(
      "Relatório de Propostas | Relatórios Estoque | Relatórios Vendas"
    );
    break;
  default:
    console.log("O tipo de acesso: " + tipoUsuario + " não foi reconhecido!");
    break;
}
