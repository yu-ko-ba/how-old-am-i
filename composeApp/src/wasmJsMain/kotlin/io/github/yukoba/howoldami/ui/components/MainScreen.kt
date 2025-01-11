package io.github.yukoba.howoldami.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import io.github.yukoba.howoldami.ui.components.types.DateOfBirth
import io.github.yukoba.howoldami.usecase.ValidateIntegerUseCase

@Composable
fun MainScreen(
    dateOfBirth: DateOfBirth,
    age: String,
    onDateOfBirthChange: (DateOfBirth) -> Unit,
    modifier: Modifier = Modifier,
    validateIntegerUseCase: ValidateIntegerUseCase,
) {
    Box(
        modifier = modifier.fillMaxSize(),
        contentAlignment = Alignment.Center,
    ) {
        Column(
            verticalArrangement = Arrangement.spacedBy(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text("生年月日を入力してください")
            DateOfBirthInputField(
                value = dateOfBirth,
                onValueChange = onDateOfBirthChange,
                validateIntegerUseCase = validateIntegerUseCase,
            )
            Text("あなたは ${age}歳 です")
        }
    }
}