import type { Match } from '../types/Match';

export function mapAnalysisToMatch(matches: Match[]): Match[] {
  return matches.map(match => {
    const normalizedText = normalize(match.analysisText);
    const homeNorm = normalize(match.homeTeam);
    const awayNorm = normalize(match.awayTeam);
    const foundHome = normalizedText.includes(homeNorm);
    const foundAway = normalizedText.includes(awayNorm);
    return { ...match, mapped: foundHome || foundAway };
  });
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z가-힣0-9\s]/g, '')
    .replace(/\s+/g, '')
    .replace(/fc|sc|cf|club/gi, '')
    .trim();
}
