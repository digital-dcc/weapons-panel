/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
// import {modifierFor} from './modifier.js';
// import {diceChain, DiceRoll} from './dice.js';
import {styles} from './styles.js';

function kebabToCamel(kebabStr) {
  return kebabStr.replace(/-./g, (match) => match[1].toUpperCase());
}

function camelToKebab(camelStr) {
	return camelStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export class WeaponsPanel extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      // attributes
      strength: {
        type: Number,
        required: true,
      },
      invisible: {state: true},
      onHigherGround: {state: true},
      squeezing: {state: true},
      entangled: {state: true},
      untrained: {state: true},
      firingIntoMelee: {state: true},
      mounted: {state: true},
      charging: {state: true},
      sneakAttacking: {state: true},

      oponentBehindConver: {state: true},
      oponentBlinded: {state: true},
      oponentEntangled: {state: true},
      oponentHelpless: {state: true},
      oponentProne: {state: true},
    };
  }

  constructor() {
    super();
    this.attackerInvisible = false;
    this.attackerOnHigherGround = false;
    this.attackerSqueezing = false;
    this.attackerEntangled = false;
    this.attackerUntrained = false;
    this.attackerFiringIntoMelee = false;
    this.attackerMounted = false;
    this.attackerCharging = false;
    this.attackerSneakAttacking = false;
    this.opponentBehindCover = false;
    this.opponentBlinded = false;
    this.opponentEntangled = false;
    this.opponentHelpless = false;
    this.opponentProne = false;
  }

  connectedCallback() {
    super.connectedCallback();

		// whenever an equipped weapon is added or removed from the panel, we need to set the checkbox values
		// on the new equipped weapon
    const slot = this.shadowRoot?.querySelector('slot');
    slot?.addEventListener('slotchange', () => {
      const assignedNodes = slot
        ?.assignedNodes()
        .filter((node) => node.nodeName === 'EQUIPPED-WEAPON');

      // set/unset properties on the child equipped-weapon elements based on the set checkbox values
      for (const node of assignedNodes || []) {
        for (const prop of [
          'attackerInvisible',
          'attackerOnHigherGround',
          'attackerSqueezing',
          'attackerEntangled',
          'attackerUntrained',
          'attackerFiringIntoMelee',
          'attackerMounted',
          'attackerCharging',
          'attackerSneakAttacking',
          'opponentBehindCover',
          'opponentBlinded',
          'opponentEntangled',
          'opponentHelpless',
          'opponentProne',
        ]) {
          if (this[prop]) {
            // @ts-ignore
            node.setAttribute(camelToKebab(this[prop]), '');
          } else {
            // @ts-ignore
            node.removeAttribute(this[prop]);
          }
        }
      }
    });
  }

  render() {
    return html`
      <div class="wrapper" part="wrapper">
        <h1>Weapons</h1>
        <slot></slot>
        <div class="you-are" part="you-are">
          <h2>You are...</h2>
          <ul class="checkboxes">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-invisible"
                  .checked="${this.attackerInvisible}"
                  @change="${this.handleCheckboxChange}"
                />
                invisible
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-on-higher-ground"
                  .checked="${this.attackerOnHigherGround}"
                  @change="${this.handleCheckboxChange}"
                />
                On higher ground
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-squeezing"
                  .checked="${this.attackerSqueezing}"
                  @change="${this.handleCheckboxChange}"
                />
                squeezing
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-entangled"
                  .checked="${this.attackerEntangled}"
                  @change="${this.handleCheckboxChange}"
                />
                entangled
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-untrained"
                  .checked="${this.attackerUntrained}"
                  @change="${this.handleCheckboxChange}"
                />
                untrained
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-firing-into-melee"
                  .checked="${this.attackerFiringIntoMelee}"
                  @change="${this.handleCheckboxChange}"
                />
                firing into melee
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-mounted"
                  .checked="${this.attackerMounted}"
                  @change="${this.handleCheckboxChange}"
                />
                mounted
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-charging"
                  .checked="${this.attackerCharging}"
                  @change="${this.handleCheckboxChange}"
                />
                charging
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-sneak-attacking"
                  .checked="${this.attackerSneakAttacking}"
                  @change="${this.handleCheckboxChange}"
                />
                sneak attacking
              </label>
            </li>
          </ul>
        </div>
        <div class="your-target-is" part="your-target-is">
          <h2>Your target is...</h2>
          <ul class="checkboxes">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-behind-cover"
                  .checked="${this.opponentBehindCover}"
                  @change="${this.handleCheckboxChange}"
                />
                behind cover
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-blinded"
                  .checked="${this.opponentBlinded}"
                  @change="${this.handleCheckboxChange}"
                />
                blinded
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-entangled"
                  .checked="${this.opponentEntangled}"
                  @change="${this.handleCheckboxChange}"
                />
                entangled
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-helpless"
                  .checked="${this.opponentHelpless}"
                  @change="${this.handleCheckboxChange}"
                />
                helpless
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-prone"
                  .checked="${this.opponentProne}"
                  @change="${this.handleCheckboxChange}"
                />
                prone
              </label>
            </li>
          </ul>
        </div>
      </div>
    `;
  }

  handleCheckboxChange(event) {
    // keep track of the set checkboxes in state
    this[kebabToCamel(event.target.name)] = event.target.checked;

    // grab child equipped-weapon elements
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedNodes = slot
      ?.assignedNodes()
      .filter((node) => node.nodeName === 'EQUIPPED-WEAPON');

    // set/unset properties on the child equipped-weapon elements based on the set checkbox value
    for (const node of assignedNodes || []) {
      if (event.target.checked) {
        // @ts-ignore
        node.setAttribute(event.target.name, '');
      } else {
        // @ts-ignore
        node.removeAttribute(event.target.name);
      }
    }
  }
}

window.customElements.define('weapons-panel', WeaponsPanel);
