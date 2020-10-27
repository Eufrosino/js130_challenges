const AMINO_ACIDS_LEGEND = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
}

function translate(rna) {
  if (!rna) {
    return [];
  }
  let proteins = [];
  let lengthOfAminoAcid = 3;

  for (let rnaI = 0; rnaI < rna.length; rnaI += 3) {
    let currentTrio = rna.split('').splice(rnaI, lengthOfAminoAcid).join('');
    let currentAminoAcid = AMINO_ACIDS_LEGEND[currentTrio];

    if (currentAminoAcid === undefined) {
      throw new Error("Invalid codon");
    }

    if (currentAminoAcid === 'STOP') {
      return proteins
    } else {
      proteins.push(currentAminoAcid);
    }
  }
  return proteins;
}

translate("UCUUCCUCAUCG")

module.exports = translate;
