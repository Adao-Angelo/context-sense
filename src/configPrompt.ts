function semanthicSearchToOffensiveWordsByContext(context: string) {
  return `
        Com base no texto enviado abaixo

        TEXTO:
            ${context}
        
        Analise se é ofensivo as expressoes que foram usados no texto ou se o mesmo ofende alguem

        se sim diz yes e onde ofende se não diz no .
    `;
}

export { semanthicSearchToOffensiveWordsByContext };
