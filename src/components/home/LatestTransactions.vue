<template>
  <div>
    <Loader :data="transactions">
      <div class="hidden sm:block">
        <TableTransactionsDesktop
          :transactions="transactions"
          :show-confirmations="true"
          :handeled-u-n-s="true"
          :sort-query="sortParams"
          @on-sort-change="onSortChange"
        />
      </div>
      <div class="sm:hidden">
        <TableTransactionsMobile :transactions="transactions" :handeled-u-n-s="true" />
      </div>
      <div
        v-if="transactions && transactions.length === paginationLimit"
        class="mx-5 sm:mx-10 mt-5 md:mt-10 flex flex-wrap"
      >
        <RouterLink :to="{ name: 'transactions', params: { page: 2 } }" tag="button" class="button-lg">
          {{ $t("PAGINATION.SHOW_MORE") }}
        </RouterLink>
      </div>
    </Loader>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { ISortParameters, ITransaction } from "@/interfaces";
import TransactionService from "@/services/transaction";
import { paginationLimit } from "@/constants";

@Component
export default class LatestTransactions extends Vue {
  @Prop({ required: true }) public transactionType: number;
  @Prop({ required: true }) public transactionGroup: number;

  private paginationLimit: number = paginationLimit;
  private transactions: ITransaction[] | null = null;

  get sortParams() {
    return this.$store.getters["ui/transactionSortParams"];
  }

  set sortParams(params: ISortParameters) {
    this.$store.dispatch("ui/setTransactionSortParams", {
      field: params.field,
      type: params.type,
    });
  }

  @Watch("transactionType")
  public async onTransactionTypeChanged(): Promise<void> {
    this.transactions = null;
    await this.getTransactions();
  }

  public async mounted(): Promise<void> {
    await this.prepareComponent();
  }

  private async prepareComponent() {
    await this.getTransactions();

    this.$store.watch(
      (state) => state.network.height,
      (value) => this.getTransactions(),
    );
  }

  private async getTransactions() {
    const { data } = await TransactionService.filterByType(1, this.transactionType, this.transactionGroup);

    this.transactions = data.map((transaction: ITransaction) => ({ ...transaction, price: null }));
  }

  private onSortChange(params: ISortParameters) {
    this.sortParams = params;
  }
}
</script>
