const generateOrderXML = ({
  code, name, description, quantity, unitValue,
}) => `
  <?xml version="1.0" encoding="ISO-8859-1"?>
    <pedido>
    <cliente>
        <nome>${name}</nome>
    </cliente>
    <itens>
        <item>
            <codigo>${code}</codigo>
            <descricao>${description}</descricao>
            <qtde>${quantity}</qtde>
            <vlr_unit>${unitValue}</vlr_unit>
        </item>
    </itens>
    </pedido>
  `;

export default generateOrderXML;
