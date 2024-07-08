// @ts-nocheck
import {EquippedWeapon} from '../weapons-panel.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('weapons-panel', () => {
  test('is defined', () => {
    const el = document.createElement('weapons-panel');
    assert.instanceOf(el, EquippedWeapon);
  });

  test('str=3, agi=18, weapon=Longsword', async () => {
    const el = await fixture(
      html`<weapons-panel
        strength="3"
        agility="18"
        weapon="Longsword"
      ></weapons-panel>`
    );
    const attackButton = el.shadowRoot.querySelector(
      '.attack .attack-display-button'
    ).innerHTML;
    const damageButton = el.shadowRoot.querySelector(
      '.damage .damage-display-button'
    ).innerHTML;

    assert.match(attackButton, /1d20-3/);
    assert.match(damageButton, /1d8-3/);
  });

  test('str=18, agi=3, weapon=Mace', async () => {
    const el = await fixture(
      html`<weapons-panel strength="18" agility="3" weapon="Mace"></weapons-panel>`
    );
    const attackButton = el.shadowRoot.querySelector(
      '.attack .attack-display-button'
    ).innerHTML;
    const damageButton = el.shadowRoot.querySelector(
      '.damage .damage-display-button'
    ).innerHTML;

    assert.match(attackButton, /1d20\+3/);
    assert.match(damageButton, /1d6\+3/);
  });

  test('str=18, agi=3, weapon=Longbow', async () => {
    const el = await fixture(
      html`<weapons-panel
        strength="18"
        agility="3"
        weapon="Longbow"
      ></weapons-panel>`
    );
    const attackButton = el.shadowRoot.querySelector(
      '.attack .attack-display-button'
    ).innerHTML;
    const damageButton = el.shadowRoot.querySelector(
      '.damage .damage-display-button'
    ).innerHTML;

    assert.match(attackButton, /1d20-3/);
    assert.match(damageButton, /1d6/);
  });

  test('str=3, agi=18, weapon=Shortbow', async () => {
    const el = await fixture(
      html`<weapons-panel
        strength="3"
        agility="18"
        weapon="Shortbow"
      ></weapons-panel>`
    );
    const attackButton = el.shadowRoot.querySelector(
      '.attack .attack-display-button'
    ).innerHTML;
    const damageButton = el.shadowRoot.querySelector(
      '.damage .damage-display-button'
    ).innerHTML;

    assert.match(attackButton, /1d20\+3/);
    assert.match(damageButton, /1d6/);
  });

  test('handles a click', async () => {
    let diceRoll;
    const el = await fixture(
      html`<weapons-panel
        strength="3"
        agility="18"
        weapon="Dagger"
      ></weapons-panel>`
    );
    el.addEventListener('dice-roll', (event) => {
      diceRoll = event.detail.diceRoll;
    });
    const button = el.shadowRoot.querySelector('button.attack-display-button');
    button.click();
    await el.updateComplete;
    assert.equal(diceRoll.roll.qty, 1);
    assert.equal(diceRoll.roll.die, 20);
    assert.equal(diceRoll.roll.mod, -3);
  });
});
