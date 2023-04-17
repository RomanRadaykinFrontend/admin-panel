<template>
  <div class="users-table">
    <h1>All users:</h1>
    <el-form ref="form" :model="model">
      <div class="users-table__filters">
        <el-form-item prop="info">
          <el-input v-model="model.info" placeholder="Email or user id" />
        </el-form-item>
        <el-form-item prop="sort">
          <el-select v-model="model.sort" placeholder="Sort by">
            <el-option
              v-for="opt in sortOptions"
              :key="opt.title"
              :label="opt.title"
              :value="opt.value"
            />
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <div class="users-table__table">
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="balance" label="Balance" />
        <el-table-column prop="active_services" label="Active services" />
      </el-table>
      <el-button text type="info">Show more</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// types
type Form = { info: string; sort: string };
type SortOption = {
  title: string;
  value: number;
};
type TableItem = {
  date: string;
  email: string;
  balance: string;
  active_services: string;
};
///

const form = ref<null | HTMLFormElement>(null);
const model = ref<Form>({
  info: "",
  sort: "",
});
const sortOptions: SortOption[] = [
  { title: ">By date", value: 1 },
  { title: "<By date", value: 2 },
  { title: "<By balance", value: 3 },
  { title: ">By balance", value: 4 },
];

const tableData: TableItem[] = [
  {
    date: "2016-05-03",
    email: "test@test.test",
    balance: "Tom",
    active_services: "2",
  },
  {
    date: "2016-05-03",
    email: "test@test.test",
    balance: "Tom",
    active_services: "2",
  },
  {
    date: "2016-05-03",
    email: "test@test.test",
    balance: "Tom",
    active_services: "2",
  },
  {
    date: "2016-05-03",
    email: "test@test.test",
    balance: "Tom",
    active_services: "2",
  },
];
</script>

<style scoped lang="scss">
.users-table {
  h1 {
    font-size: 35px;
  }
  &__filters {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;
    width: 600px;
  }
  &__table {
    display: flex;
    flex-direction: column;
    grid-row-gap: 20px;
    align-items: center;
    &:deep .el-button {
      width: 150px;
    }
  }
}
</style>
