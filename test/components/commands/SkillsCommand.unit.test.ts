import SkillsCommand from '@/components/commands/SkillsCommand.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Skills Command ...', () => {
  it('should render skills command', () => {
    render(SkillsCommand);

    expect(screen.getByText('Java', { exact: false })).toBeInTheDocument();
  });
});
