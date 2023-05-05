<template>
  <div class="container">
    <div class="row m-3">
      <div class="col">
        <div class="row align-items-center">
          <div class="col">
            <i class="bi-filetype-html fs-1 float-end"></i>
          </div>
          <div class="col-2">
            <input type="number" class="form-control" placeholder="12345" v-model="questionnaireId">
          </div>
          <div class="col">
            <button class="btn btn-success bi-search float-start" @click.prevent="findQuestionnaire" :disabled="disableButtonSearch"> Buscar</button>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="isSysco" v-model="isSysco">
              <label class="form-check-label" for="isSysco">¿Es Sysco EIR?</label>
            </div>
          </div>
        </div>
        <div v-if="!result.ok" class="row text-center">
          <div class="col">
            <span>{{ result.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useApp } from './composables/useApp';
  const { disableButtonSearch, isSysco, questionnaireId, result, findQuestionnaire } = useApp();
</script>

<style scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>