<template>
  <div class="aside">
    <div class="aside__balance">
      <el-tag
        v-for="balanceItem in balance"
        :key="balanceItem.title"
        size="large"
        type="info"
      >
        <span>{{ balanceItem.title }}</span>
        <span>{{ balanceItem.value }}</span>
      </el-tag>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      default-active="2"
      text-color="#fff"
    >
      <el-menu-item
        v-for="(menuItem, idx) in menuItems"
        :key="menuItem.title"
        :index="`${idx}`"
      >
        <el-icon>
          <component :is="menuItem.icon" />
        </el-icon>
        <span>{{ menuItem.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from "vue";
import {
  House,
  Wallet,
  Checked,
  Message,
  Setting,
} from "@element-plus/icons-vue";

type Balance = {
  value: string;
  title: string;
};
type MenuItem = {
  icon: Record<string, any>;
  title: string;
};

const balance = ref<Balance[]>([
  { title: "Balance USDT", value: "600$" },
  { title: "Subscribers", value: "2" },
]);

const menuItems = ref<MenuItem[]>([
  { icon: shallowRef(House), title: "Main" },
  { icon: shallowRef(Wallet), title: "Finance" },
  { icon: shallowRef(Checked), title: "Subscription" },
  { icon: shallowRef(Message), title: "SMS messages" },
  { icon: shallowRef(Setting), title: "Settings" },
  { icon: shallowRef(Setting), title: "Adm. users" },
  { icon: shallowRef(Setting), title: "Adm. finance" },
]);
</script>

<style scoped lang="scss">
.aside {
  background: #545c64;
  height: 100%;
  &__balance {
    display: flex;
    flex-direction: column;
    grid-row-gap: 10px;
    padding: 15px 20px 0 20px;
    &:deep .el-tag__content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 17px;
    }
  }
}
</style>
