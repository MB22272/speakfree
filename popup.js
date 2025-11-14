let translator = null;

async function translate() {
  const text = document.getElementById('input').value;
  const lang = document.getElementById('target-lang').value;
  const output = document.getElementById('output');

  if (!text) return;

  if (!translator) {
    output.innerText = "Loading model... (only once)";
    translator = await pipeline('translation', 'Xenova/nllb-200-distilled-600M');
  }

  output.innerText = "Translating...";
  const result = await translator(text, { src_lang: 'eng_Latn', tgt_lang: `${lang}_Latn` });
  output.innerText = result[0].translation_text;
}
