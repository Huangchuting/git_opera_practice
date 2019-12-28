<template>
<div style="margin-top: 20px">
 <column :header="Column" :data="tableData" @SelectionChange="mhandleSelectionChange" @tablePrint="todetail"></column>
</div>
</template>
<script>
import  column from './column.js'
</script>