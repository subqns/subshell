---
title: Constants
---

The following sections contain the module constants, also known as parameter
types. These can only be changed as part of a runtime upgrade. On the api, these
are exposed via `api.consts.<module>.<method>`.

(NOTE: These were generated from a static/snapshot view of a recent Substrate
master node. Some items may not be available in older nodes, or in any
customized implementations.)

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[contracts](#contracts)**

- **[currencies](#currencies)**

- **[democracy](#democracy)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[elections](#elections)**

- **[identity](#identity)**

- **[indices](#indices)**

- **[multisig](#multisig)**

- **[nftmart](#nftmart)**

- **[nftmartAuction](#nftmartauction)**

- **[nftmartOrder](#nftmartorder)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[staking](#staking)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[tips](#tips)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

---

## babe

### epochDuration: `u64`

- **interface**: `api.consts.babe.epochDuration`
- **summary**: The amount of time, in slots, that each epoch should last. NOTE:
  Currently it is not possible to change the epoch duration after the chain has
  started. Attempting to do so will brick block production.

### expectedBlockTime: `Moment`

- **interface**: `api.consts.babe.expectedBlockTime`
- **summary**: The expected average block time at which BABE should be creating
  blocks. Since BABE is probabilistic it is not trivial to figure out what the
  expected average block time should be based on the slot duration and the
  security parameter `c` (where `1 - c` represents the probability of a slot
  being empty).

---

## balances

### existentialDeposit: `Balance`

- **interface**: `api.consts.balances.existentialDeposit`
- **summary**: The minimum amount required to keep an account open.

---

## bounties

### bountyCuratorDeposit: `Permill`

- **interface**: `api.consts.bounties.bountyCuratorDeposit`
- **summary**: Percentage of the curator fee that will be reserved upfront as
  deposit for bounty curator.

### bountyDepositBase: `BalanceOf`

- **interface**: `api.consts.bounties.bountyDepositBase`
- **summary**: The amount held on deposit for placing a bounty proposal.

### bountyDepositPayoutDelay: `BlockNumber`

- **interface**: `api.consts.bounties.bountyDepositPayoutDelay`
- **summary**: The delay period for which a bounty beneficiary need to wait
  before claim the payout.

### bountyUpdatePeriod: `BlockNumber`

- **interface**: `api.consts.bounties.bountyUpdatePeriod`
- **summary**: Bounty duration in blocks.

### bountyValueMinimum: `BalanceOf`

- **interface**: `api.consts.bounties.bountyValueMinimum`
- **summary**: Minimum value for a bounty.

### dataDepositPerByte: `BalanceOf`

- **interface**: `api.consts.bounties.dataDepositPerByte`
- **summary**: The amount held on deposit per byte within bounty description.

### maximumReasonLength: `u32`

- **interface**: `api.consts.bounties.maximumReasonLength`
- **summary**: Maximum acceptable reason length.

---

## contracts

### deletionQueueDepth: `u32`

- **interface**: `api.consts.contracts.deletionQueueDepth`
- **summary**: The maximum number of tries that can be queued for deletion.

### deletionWeightLimit: `Weight`

- **interface**: `api.consts.contracts.deletionWeightLimit`
- **summary**: The maximum amount of weight that can be consumed per block for
  lazy trie removal.

### depositPerContract: `BalanceOf`

- **interface**: `api.consts.contracts.depositPerContract`
- **summary**: The balance every contract needs to deposit to stay alive
  indefinitely.

  This is different from the [`Self::TombstoneDeposit`] because this only needs
  to be deposited while the contract is alive. Costs for additional storage are
  added to this base cost.

  This is a simple way to ensure that contracts with empty storage eventually
  get deleted by making them pay rent. This creates an incentive to remove them
  early in order to save rent.

### depositPerStorageByte: `BalanceOf`

- **interface**: `api.consts.contracts.depositPerStorageByte`
- **summary**: The balance a contract needs to deposit per storage byte to stay
  alive indefinitely.

  Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1
  BU/byte/day, then a contract with 1,000,000 BU that uses 1,000 bytes of
  storage would pay no rent. But if the balance reduced to 500,000 BU and the
  storage stayed the same at 1,000, then it would pay 500 BU/day.

### depositPerStorageItem: `BalanceOf`

- **interface**: `api.consts.contracts.depositPerStorageItem`
- **summary**: The balance a contract needs to deposit per storage item to stay
  alive indefinitely.

  It works the same as [`Self::DepositPerStorageByte`] but for storage items.

### rentFraction: `Perbill`

- **interface**: `api.consts.contracts.rentFraction`
- **summary**: The fraction of the deposit that should be used as rent per
  block.

  When a contract hasn't enough balance deposited to stay alive indefinitely it
  needs to pay per block for the storage it consumes that is not covered by the
  deposit. This determines how high this rent payment is per block as a fraction
  of the deposit.

### schedule: `Schedule`

- **interface**: `api.consts.contracts.schedule`
- **summary**: Cost schedule and limits.

### signedClaimHandicap: `BlockNumber`

- **interface**: `api.consts.contracts.signedClaimHandicap`
- **summary**: Number of block delay an extrinsic claim surcharge has.

  When claim surcharge is called by an extrinsic the rent is checked for
  current_block - delay

### surchargeReward: `BalanceOf`

- **interface**: `api.consts.contracts.surchargeReward`
- **summary**: Reward that is received by the party whose touch has led to
  removal of a contract.

### tombstoneDeposit: `BalanceOf`

- **interface**: `api.consts.contracts.tombstoneDeposit`
- **summary**: The minimum amount required to generate a tombstone.

---

## currencies

### getNativeCurrencyId: `CurrencyIdOf`

- **interface**: `api.consts.currencies.getNativeCurrencyId`

---

## democracy

### cooloffPeriod: `BlockNumber`

- **interface**: `api.consts.democracy.cooloffPeriod`
- **summary**: Period in blocks where an external proposal may not be
  re-submitted after being vetoed.

### enactmentPeriod: `BlockNumber`

- **interface**: `api.consts.democracy.enactmentPeriod`
- **summary**: The minimum period of locking and the period between a proposal
  being approved and enacted.

  It should generally be a little more than the unstake period to ensure that
  voting stakers have an opportunity to remove themselves from the system in the
  case where they are on the losing side of a vote.

### fastTrackVotingPeriod: `BlockNumber`

- **interface**: `api.consts.democracy.fastTrackVotingPeriod`
- **summary**: Minimum voting period allowed for a fast-track referendum.

### launchPeriod: `BlockNumber`

- **interface**: `api.consts.democracy.launchPeriod`
- **summary**: How often (in blocks) new public referenda are launched.

### maxVotes: `u32`

- **interface**: `api.consts.democracy.maxVotes`
- **summary**: The maximum number of votes for an account.

  Also used to compute weight, an overly big value can lead to extrinsic with
  very big weight: see `delegate` for instance.

### minimumDeposit: `BalanceOf`

- **interface**: `api.consts.democracy.minimumDeposit`
- **summary**: The minimum amount to be used as a deposit for a public
  referendum proposal.

### preimageByteDeposit: `BalanceOf`

- **interface**: `api.consts.democracy.preimageByteDeposit`
- **summary**: The amount of balance that must be deposited per byte of preimage
  stored.

### votingPeriod: `BlockNumber`

- **interface**: `api.consts.democracy.votingPeriod`
- **summary**: How often (in blocks) to check for new votes.

---

## electionProviderMultiPhase

### offchainRepeat: `BlockNumber`

- **interface**: `api.consts.electionProviderMultiPhase.offchainRepeat`
- **summary**: The repeat threshold of the offchain worker.

  For example, if it is 5, that means that at least 5 blocks will elapse between
  attempts to submit the worker's solution.

### signedDepositBase: `BalanceOf`

- **interface**: `api.consts.electionProviderMultiPhase.signedDepositBase`
- **summary**: Base deposit for a signed solution.

### signedDepositByte: `BalanceOf`

- **interface**: `api.consts.electionProviderMultiPhase.signedDepositByte`
- **summary**: Per-byte deposit for a signed solution.

### signedDepositWeight: `BalanceOf`

- **interface**: `api.consts.electionProviderMultiPhase.signedDepositWeight`
- **summary**: Per-weight deposit for a signed solution.

### signedMaxSubmissions: `u32`

- **interface**: `api.consts.electionProviderMultiPhase.signedMaxSubmissions`
- **summary**: Maximum number of signed submissions that can be queued.

  It is best to avoid adjusting this during an election, as it impacts
  downstream data structures. In particular, `SignedSubmissionIndices<T>` is
  bounded on this value. If you update this value during an election, you _must_
  ensure that `SignedSubmissionIndices.len()` is less than or equal to the new
  value. Otherwise, attempts to submit new solutions may cause a runtime panic.

### signedMaxWeight: `Weight`

- **interface**: `api.consts.electionProviderMultiPhase.signedMaxWeight`
- **summary**: Maximum weight of a signed solution.

  This should probably be similar to [`Config::MinerMaxWeight`].

### signedPhase: `BlockNumber`

- **interface**: `api.consts.electionProviderMultiPhase.signedPhase`
- **summary**: Duration of the signed phase.

### signedRewardBase: `BalanceOf`

- **interface**: `api.consts.electionProviderMultiPhase.signedRewardBase`
- **summary**: Base reward for a signed solution

### solutionImprovementThreshold: `Perbill`

- **interface**:
  `api.consts.electionProviderMultiPhase.solutionImprovementThreshold`
- **summary**: The minimum amount of improvement to the solution score that
  defines a solution as "better" (in any phase).

### unsignedPhase: `BlockNumber`

- **interface**: `api.consts.electionProviderMultiPhase.unsignedPhase`
- **summary**: Duration of the unsigned phase.

---

## elections

### candidacyBond: `BalanceOf`

- **interface**: `api.consts.elections.candidacyBond`
- **summary**: How much should be locked up in order to submit one's candidacy.

### desiredMembers: `u32`

- **interface**: `api.consts.elections.desiredMembers`
- **summary**: Number of members to elect.

### desiredRunnersUp: `u32`

- **interface**: `api.consts.elections.desiredRunnersUp`
- **summary**: Number of runners_up to keep.

### palletId: `LockIdentifier`

- **interface**: `api.consts.elections.palletId`
- **summary**: Identifier for the elections-phragmen pallet's lock

### termDuration: `BlockNumber`

- **interface**: `api.consts.elections.termDuration`
- **summary**: How long each seat is kept. This defines the next block number at
  which an election round will happen. If set to zero, no elections are ever
  triggered and the module will be in passive mode.

### votingBondBase: `BalanceOf`

- **interface**: `api.consts.elections.votingBondBase`
- **summary**: Base deposit associated with voting.

  This should be sensibly high to economically ensure the pallet cannot be
  attacked by creating a gigantic number of votes.

### votingBondFactor: `BalanceOf`

- **interface**: `api.consts.elections.votingBondFactor`
- **summary**: The amount of bond that need to be locked for each vote (32
  bytes).

---

## identity

### basicDeposit: `BalanceOf`

- **interface**: `api.consts.identity.basicDeposit`
- **summary**: The amount held on deposit for a registered identity

### fieldDeposit: `BalanceOf`

- **interface**: `api.consts.identity.fieldDeposit`
- **summary**: The amount held on deposit per additional field for a registered
  identity.

### maxAdditionalFields: `u32`

- **interface**: `api.consts.identity.maxAdditionalFields`
- **summary**: Maximum number of additional fields that may be stored in an ID.
  Needed to bound the I/O required to access an identity, but can be pretty
  high.

### maxRegistrars: `u32`

- **interface**: `api.consts.identity.maxRegistrars`
- **summary**: Maxmimum number of registrars allowed in the system. Needed to
  bound the complexity of, e.g., updating judgements.

### maxSubAccounts: `u32`

- **interface**: `api.consts.identity.maxSubAccounts`
- **summary**: The maximum number of sub-accounts allowed per identified
  account.

### subAccountDeposit: `BalanceOf`

- **interface**: `api.consts.identity.subAccountDeposit`
- **summary**: The amount held on deposit for a registered subaccount. This
  should account for the fact that one storage item's value will increase by the
  size of an account ID, and there will be another trie item whose value is the
  size of an account ID plus 32 bytes.

---

## indices

### deposit: `BalanceOf`

- **interface**: `api.consts.indices.deposit`
- **summary**: The deposit needed for reserving an index.

---

## multisig

### depositBase: `BalanceOf`

- **interface**: `api.consts.multisig.depositBase`
- **summary**: The base amount of currency needed to reserve for creating a
  multisig execution or to store a dispatch call for later.

  This is held for an additional storage item whose value size is
  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
  `32 + sizeof(AccountId)` bytes.

### depositFactor: `BalanceOf`

- **interface**: `api.consts.multisig.depositFactor`
- **summary**: The amount of currency needed per unit threshold when creating a
  multisig execution.

  This is held for adding 32 bytes more into a pre-existing storage value.

### maxSignatories: `u16`

- **interface**: `api.consts.multisig.maxSignatories`
- **summary**: The maximum amount of signatories allowed in the multisig.

---

## nftmart

### createClassDeposit: `Balance`

- **interface**: `api.consts.nftmart.createClassDeposit`
- **summary**: The minimum balance to create class

### createTokenDeposit: `Balance`

- **interface**: `api.consts.nftmart.createTokenDeposit`
- **summary**: The minimum balance to create token

### metaDataByteDeposit: `Balance`

- **interface**: `api.consts.nftmart.metaDataByteDeposit`
- **summary**: The amount of balance that must be deposited per byte of
  metadata.

### moduleId: `PalletId`

- **interface**: `api.consts.nftmart.moduleId`
- **summary**: The NFT's module id

---

## nftmartAuction

### treasuryPalletId: `PalletId`

- **interface**: `api.consts.nftmartAuction.treasuryPalletId`
- **summary**: The treasury's pallet id, used for deriving its sovereign account
  ID.

---

## nftmartOrder

### treasuryPalletId: `PalletId`

- **interface**: `api.consts.nftmartOrder.treasuryPalletId`
- **summary**: The treasury's pallet id, used for deriving its sovereign account
  ID.

---

## proxy

### announcementDepositBase: `BalanceOf`

- **interface**: `api.consts.proxy.announcementDepositBase`
- **summary**: The base amount of currency needed to reserve for creating an
  announcement.

  This is held when a new storage item holding a `Balance` is created (typically
  16 bytes).

### announcementDepositFactor: `BalanceOf`

- **interface**: `api.consts.proxy.announcementDepositFactor`
- **summary**: The amount of currency needed per announcement made.

  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68
  bytes) into a pre-existing storage value.

### maxPending: `u32`

- **interface**: `api.consts.proxy.maxPending`
- **summary**: The maximum amount of time-delayed announcements that are allowed
  to be pending.

### maxProxies: `u32`

- **interface**: `api.consts.proxy.maxProxies`
- **summary**: The maximum amount of proxies allowed for a single account.

### proxyDepositBase: `BalanceOf`

- **interface**: `api.consts.proxy.proxyDepositBase`
- **summary**: The base amount of currency needed to reserve for creating a
  proxy.

  This is held for an additional storage item whose value size is
  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.

### proxyDepositFactor: `BalanceOf`

- **interface**: `api.consts.proxy.proxyDepositFactor`
- **summary**: The amount of currency needed per proxy added.

  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one
  should take into account `32 + proxy_type.encode().len()` bytes of data.

---

## recovery

### configDepositBase: `BalanceOf`

- **interface**: `api.consts.recovery.configDepositBase`
- **summary**: The base amount of currency needed to reserve for creating a
  recovery configuration.

  This is held for an additional storage item whose value size is
  `2 + sizeof(BlockNumber, Balance)` bytes.

### friendDepositFactor: `BalanceOf`

- **interface**: `api.consts.recovery.friendDepositFactor`
- **summary**: The amount of currency needed per additional user when creating a
  recovery configuration.

  This is held for adding `sizeof(AccountId)` bytes more into a pre-existing
  storage value.

### maxFriends: `u16`

- **interface**: `api.consts.recovery.maxFriends`
- **summary**: The maximum amount of friends allowed in a recovery
  configuration.

### recoveryDeposit: `BalanceOf`

- **interface**: `api.consts.recovery.recoveryDeposit`
- **summary**: The base amount of currency needed to reserve for starting a
  recovery.

  This is primarily held for deterring malicious recovery attempts, and should
  have a value large enough that a bad actor would choose not to place this
  deposit. It also acts to fund additional storage item whose value size is
  `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a
  configurable threshold.

---

## staking

### bondingDuration: `EraIndex`

- **interface**: `api.consts.staking.bondingDuration`
- **summary**: Number of eras that staked funds must remain bonded for.

### maxNominations: `u32`

- **interface**: `api.consts.staking.maxNominations`

### maxNominatorRewardedPerValidator: `u32`

- **interface**: `api.consts.staking.maxNominatorRewardedPerValidator`
- **summary**: The maximum number of nominators rewarded for each validator.

  For each validator only the `$MaxNominatorRewardedPerValidator` biggest
  stakers can claim their reward. This used to limit the i/o cost for the
  nominator payout.

### sessionsPerEra: `SessionIndex`

- **interface**: `api.consts.staking.sessionsPerEra`
- **summary**: Number of sessions per era.

### slashDeferDuration: `EraIndex`

- **interface**: `api.consts.staking.slashDeferDuration`
- **summary**: Number of eras that slashes are deferred by, after computation.

  This should be less than the bonding duration. Set to 0 if slashes should be
  applied immediately, without opportunity for intervention.

---

## system

### blockHashCount: `BlockNumber`

- **interface**: `api.consts.system.blockHashCount`
- **summary**: Maximum number of block number to block hash mappings to keep
  (oldest pruned first).

### blockLength: `BlockLength`

- **interface**: `api.consts.system.blockLength`
- **summary**: The maximum length of a block (in bytes).

### blockWeights: `BlockWeights`

- **interface**: `api.consts.system.blockWeights`
- **summary**: Block & extrinsics weights: base values and limits.

### dbWeight: `RuntimeDbWeight`

- **interface**: `api.consts.system.dbWeight`
- **summary**: The weight of runtime database operations the runtime can invoke.

### ss58Prefix: `u16`

- **interface**: `api.consts.system.ss58Prefix`
- **summary**: The designated SS85 prefix of this chain.

  This replaces the "ss58Format" property declared in the chain spec. Reason is
  that the runtime should know about the prefix in order to make use of it as an
  identifier of the chain.

### version: `RuntimeVersion`

- **interface**: `api.consts.system.version`
- **summary**: Get the chain's current version.

---

## timestamp

### minimumPeriod: `Moment`

- **interface**: `api.consts.timestamp.minimumPeriod`
- **summary**: The minimum period between blocks. Beware that this is different
  to the _expected_ period that the block production apparatus provides. Your
  chosen consensus system will generally work with this to determine a sensible
  block time. e.g. For Aura, it will be double this period on default settings.

---

## tips

### dataDepositPerByte: `BalanceOf`

- **interface**: `api.consts.tips.dataDepositPerByte`
- **summary**: The amount held on deposit per byte within the tip report reason.

### maximumReasonLength: `u32`

- **interface**: `api.consts.tips.maximumReasonLength`
- **summary**: Maximum acceptable reason length.

### tipCountdown: `BlockNumber`

- **interface**: `api.consts.tips.tipCountdown`
- **summary**: The period for which a tip remains open after is has achieved
  threshold tippers.

### tipFindersFee: `Percent`

- **interface**: `api.consts.tips.tipFindersFee`
- **summary**: The amount of the final tip which goes to the original reporter
  of the tip.

### tipReportDepositBase: `BalanceOf`

- **interface**: `api.consts.tips.tipReportDepositBase`
- **summary**: The amount held on deposit for placing a tip report.

---

## transactionPayment

### transactionByteFee: `BalanceOf`

- **interface**: `api.consts.transactionPayment.transactionByteFee`
- **summary**: The fee to be paid for making a transaction; the per-byte
  portion.

### weightToFee: `Vec<WeightToFeeCoefficient>`

- **interface**: `api.consts.transactionPayment.weightToFee`
- **summary**: The polynomial that is applied in order to derive fee from
  weight.

---

## treasury

### burn: `Permill`

- **interface**: `api.consts.treasury.burn`
- **summary**: Percentage of spare funds (if any) that are burnt per spend
  period.

### palletId: `PalletId`

- **interface**: `api.consts.treasury.palletId`
- **summary**: The treasury's pallet id, used for deriving its sovereign account
  ID.

### proposalBond: `Permill`

- **interface**: `api.consts.treasury.proposalBond`
- **summary**: Fraction of a proposal's value that should be bonded in order to
  place the proposal. An accepted proposal gets these back. A rejected proposal
  does not.

### proposalBondMinimum: `BalanceOf`

- **interface**: `api.consts.treasury.proposalBondMinimum`
- **summary**: Minimum amount of funds that should be placed in a deposit for
  making a proposal.

### spendPeriod: `BlockNumber`

- **interface**: `api.consts.treasury.spendPeriod`
- **summary**: Period between successive spends.
