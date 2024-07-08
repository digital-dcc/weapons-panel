import {css} from 'lit';

export const styles = css`
  :host {
    display: block;
    padding: 0px;
    font-family: var(--main-font, 'Arial', sans-serif);
    font-size: 1em;
  }
  .wrapper {
    border: 1px black solid;
    padding: 10px;
    border-radius: 10px;
    min-width: 390px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
	h1 {
		margin: 0;
		padding: 0;
		font-size: 0.8em;
	}
	h2 {
		margin: 0;
		padding: 0;
		font-size: 0.6em;
	}
	.checkboxes {
		margin: 0;
		padding: 0;
		display: flex;
		gap: 5px;
		align-items: center;
		flex-wrap: wrap;
	}
	.checkboxes li {
		flex-direction: row;
		list-style: none;
		font-size: 0.8em;
		min-width: fit-content;
		
	}
`;
