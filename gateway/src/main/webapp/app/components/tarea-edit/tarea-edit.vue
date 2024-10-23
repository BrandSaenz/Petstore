<template>
    <!-- Muestra el ID solo si está presente -->
    <b-form-group v-if="tarea.id" label="ID" label-for="id-id">
      <p id="id-id" v-text="tarea.id"></p> <!-- Muestra el ID aquí -->
    </b-form-group>

    <b-form-group
      :label="$t('task.nombre')"
      label-for="nombre-id"
      :state="isNombreValid()"
      :invalid-feedback="$t('task.validate.nombre')"
    >
      <b-form-input
        id="nombre-id"
        :state="isNombreValid()"
        v-model="tarea.nombre"
        :placeholder="$t('task.messages.nombrePlaceholder')"
        :readonly="readonly"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      :label="$t('task.descripcion')"
      label-for="description-id"
      :state="isDescripcionValid()"
      :invalid-feedback="$t('task.validate.descripcion')"
    >
      <b-form-textarea
        id="description-id"
        :state="isDescripcionValid()"
        v-model="tarea.descripcion"
        :placeholder="$t('task.messages.descripcionPlaceholder')"
        :readonly="readonly"
      ></b-form-textarea>
    </b-form-group>

    <b-form-group
      :label="$t('task.fechaLimite')"
      label-for="deadline-id"
      :state="isDateValid()"
      :invalid-feedback="$t('task.validate.fechaLimite')"
    >
      <b-form-datepicker
        id="deadline-id"
        :state="isDateValid()"
        v-model="tarea.fechaLimite"
        value-as-date
        locale="es"
        :readonly="readonly"
      ></b-form-datepicker>
    </b-form-group>

</template>

<script lang="ts" src="./tarea-edit.component.ts"></script>
